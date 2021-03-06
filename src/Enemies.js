import Debris from "./Debris.js";
import {
  fireMainWeapon,
  fireSecondaryWeapon,
  fireMissile,
  fireBeam
} from "./weaponsHelper.js";

import encounters from './constants/encounters';
import enemyTypes from './constants/enemy-types';

class Enemy {
  constructor(type, x, y, level) {
    this.x = x;
    this.y = y;
    this.dx = 0;
    this.dy = 0;
    this.yaw = 0;
    this.shouldDie = false;
    this.exploding = false;
    this.level = level;

    this.type = type;
    this.projectiles = [];

    this.size = type.size;
    this.acceleration = type.acceleration;
    this.maxSpeed = type.maxSpeed;
    this.turnSpeed = type.turnSpeed;
    this.health = type.health;
    this.bounty = type.bounty;
    this.engineOn = true;

    this.mainLaserCanFire = type.weapons.includes("enemy-laser");
    this.mainLaserCooldown = type.mainLaserCooldown;

    this.secondaryLaserCanFire = type.weapons.includes("enemy-secondary-laser");
    this.secondaryLaserCooldown = type.secondaryLaserCooldown;
    this.secondaryLaserPosition = 1;

    this.missileCanFire = type.weapons.includes("enemy-missile");
    this.missileCooldown = type.missileCooldown;
    this.missilePosition = 1;
    
    this.beamCanFire = type.weapons.includes("enemy-beam");
  }

  takeDamage({ damage, dx, dy, owner }) {
    if (dx) this.dx += dx / 30;
    if (dy) this.dy += dy / 30;
    let oldHealth = this.health;
    this.health -= damage;
    if (this.health <= 0 && oldHealth > 0) {
      this.exploding = true;
      this.debris = Array(40)
        .fill()
        .map(d => new Debris({ x: this.x, y: this.y, color: "#aa3" }));
      this.lifeSpan = 80;
      owner.ore += (Math.pow(2, this.level) * 10);
    }
  }

  weaponsTick(sound, ship, distanceFromShip) {
    fireMainWeapon({
      canFire: this.mainLaserCanFire,
      cooldown: this.mainLaserCooldown,
      x: this.x,
      y: this.y,
      size: this.size,
      yaw: this.yaw,
      type: "enemy-laser",
      owner: this,
      sound: () => sound.enemyLaser()
    });
    fireSecondaryWeapon({
      canFire: this.secondaryLaserCanFire,
      cooldown: this.secondaryLaserCooldown,
      x:
        this.secondaryLaserPosition * Math.cos(this.yaw) * (this.size / 2) +
        this.x,
      y:
        this.secondaryLaserPosition * Math.sin(this.yaw) * (this.size / 2) +
        this.y,
      size: this.size,
      yaw: this.yaw,
      type: "enemy-secondary-laser",
      owner: this,
      sound: () => sound.secondaryLaser()
    });
    fireMissile({
      canFire: this.missileCanFire,
      cooldown: this.missileCooldown,
      x: this.missilePosition * Math.cos(this.yaw) * (this.size / 2) + this.x,
      y: this.missilePosition * Math.sin(this.yaw) * (this.size / 2) + this.y,
      yaw: this.yaw + (Math.PI / 2) * this.missilePosition,
      type: "enemy-missile",
      owner: this,
      target: ship,
      sound: () => sound.missile()
    });
    if (distanceFromShip < 150)
    fireBeam({
      canFire: this.beamCanFire,
      x: this.x + (Math.sin(this.yaw) * this.size) / 2,
      y: this.y - (Math.cos(this.yaw) * this.size) / 2,
      type: "enemy-beam",
      owner: this,
      target: ship,
      sound: () => {}
    });
  }

  tick(sound, ship) {
    this.projectiles.map(p => p.tick());
    this.projectiles = this.projectiles.filter(p => !p.shouldDie);

    if (this.exploding) {
      this.lifeSpan -= 1;
      this.debris.map(d => d.tick());
      if (this.lifeSpan <= 0) this.shouldDie = true;
    } else {
      let theta = Math.atan2(ship.getX() - this.x, -ship.getY() + this.y);
      this.yaw += this.yaw - theta > 0 ? -this.turnSpeed : this.turnSpeed;
      this.yaw %= Math.PI * 2;

      this.engineOn = true;

      if (this.engineOn) {
        this.dx += Math.sin(this.yaw) * this.acceleration;
        this.dy += Math.cos(this.yaw) * -this.acceleration;
        let velocity = Math.sqrt(this.dx * this.dx + this.dy * this.dy);
        if (velocity > this.maxSpeed) {
          this.dx = (this.dx / velocity) * this.maxSpeed;
          this.dy = (this.dy / velocity) * this.maxSpeed;
        }
      }

      let distanceFromShip = Math.sqrt(
        (this.x - ship.x) * (this.x - ship.x) +
        (this.y - ship.y) * (this.y - ship.y)
      );
      if (!ship.exploding && distanceFromShip < 320)
        this.weaponsTick(sound, ship, distanceFromShip);
    }

    this.x += this.dx;
    this.y += this.dy;
  }

  draw(drawer) {
    this.projectiles.map(p => p.draw(drawer));
    if (this.exploding) {
      this.debris.map(d => d.draw(drawer));
      drawer.draw(() => {
        drawer.arc({
          arc: [
            this.x + Math.random() * 20 - 10,
            this.y + Math.random() * 20 - 10,
            2 + 6 * Math.random(),
            0,
            2 * Math.PI
          ],
          strokeColor:
            "rgb(255," +
            Math.floor(Math.random() * 155 + 100) +
            "," +
            Math.floor(Math.random() * 50) +
            ")",
          shadowBlur: 10,
          shadowColor: "#f00"
        });
      });
    } else {
      drawer.draw(() => {
        drawer.fill({
          path: new Path2D(this.type.path),
          x: this.x,
          y: this.y,
          rotation: this.yaw,
          fillColor: "#700",
          strokeColor: "#a44",
          centered: false,
          size: this.size
        });
      });
    }
    // drawer.draw(() => drawer.hitbox({ x: this.x, y: this.y, size: this.size })); // hitbox
  }
}

export default class Enemies {
  constructor() {
    this.enemies = [];
  }

  createEnemy(template) {
    let enemy = {};

    let speed = enemyTypes.speed[template.speed];
    let size = enemyTypes.size[template.size];
    let health = enemyTypes.health[template.health];
    let weaponVars = template.weapons.reduce((acc, weapon) => {
      return Object.assign(acc, enemyTypes.weapons[weapon]);
    }, {})
    let weapons = template.weapons.map(weapon => enemyTypes.weapons[weapon].weapon)

    Object.assign(enemy, speed);
    Object.assign(enemy, size);
    Object.assign(enemy, health);
    Object.assign(enemy, weaponVars);
    enemy.weapons = weapons;

    return enemy;
  }

  addEnemy(x, y, level) {
    let templateGroup = encounters[level];
    let enemyTemplate = this.enemies.length === 0 ? 0 : Math.floor(Math.random() * templateGroup.length);

    let enemy = this.createEnemy(templateGroup[enemyTemplate]);

    this.enemies.push(new Enemy(enemy, x, y, level));
  }

  tick(sound, ship) {
    this.enemies.forEach(enemy => enemy.tick(sound, ship));
    this.enemies = this.enemies.filter(a => !a.shouldDie);
  }

  draw(drawer) {
    this.enemies.forEach(enemy => enemy.draw(drawer));
  }
}
