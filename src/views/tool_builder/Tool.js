class Tool {
    constructor() {
        this.accuracy = 0.0;

        this.drawSpeed = 0.0;
        this.range = 0.0;
        this.bonusDamage = 0.0;

        this.durability = 0;
        this.harvestLevel = 0;
        this.attack = 0.0;
        this.speed = 0.0; // mining speed
        this.attackSpeedMultiplier = 0.0;
        this.modifiers = 0; // free modifiers
    }

    head(heads) {
        this.durability = 0;
        this.harvestLevel = 0;
        this.attack = 0;
        this.speed = 0;

        // average all stats
        for (var head of heads) {
            if (head != null) {
                this.durability += head.headdur;
                this.attack += head.headattack;
                this.speed += head.headspeed;

                // use highest harvestlevel
                if (head.headlevel > this.harvestLevel) {
                    this.harvestLevel = head.headlevel;
                }
            }
        }

        this.durability = Math.max(1, this.durability / heads.length);
        this.attack /= 1.0 * heads.length;
        this.speed /= 1.0 * heads.length;
    }

    extra(extras) {
        let dur = 0;
        for (var extra of extras) {
            if (extra != null) {
                dur += extra.extradur;
            }
        }
        this.durability += Math.round(1.0 * dur / 1.0 * extras.length);

        return this;
    }

    handle(handles) {
        // (Average Head Durability + Average Extra Durability) * Average Handle Modifier + Average Handle Durability

        let dur = 0;
        let modifier = 0.0;
        for (var handle of handles) {
            if (handle != null) {
                dur += handle.handledur;
                modifier += handle.handlemod;
            }
        }

        modifier /= 1.0 * handles.length;
        this.durability = Math.round(1.0 * this.durability * modifier);

        // add in handle durability change
        this.durability += Math.round(1.0 * dur / 1.0 * handles.length);

        this.durability = Math.max(1, this.durability);

        return this;
    }

    limb(bowlimbs) {
        this.drawSpeed = 0;
        this.range = 0;
        this.bonusDamage = 0;

        for (var limb of bowlimbs) {
            if (limb != null) {
                this.drawSpeed += limb.bowspeed;
                this.range += limb.bowrange;
                this.bonusDamage += limb.bowdamage;
            }
        }

        this.drawSpeed /= 1.0 * bowlimbs.length;
        this.range /= 1.0 * bowlimbs.length;
        this.bonusDamage /= 1.0 * bowlimbs.length;

        this.drawSpeed = Math.max(0.001, drawSpeed);
        this.range = Math.max(0.001, range);

        return this;
    }

    bowstring(bowstrings) {
        let modifier = 0.0;

        for (var bowstring of bowstrings) {
            if (bowstring != null) {
                modifier += bowstring.stringmod;
            }
        }

        modifier /= 1.0 * bowstrings.length;
        this.durability = Math.round(1.0 * this.durability * modifier);
        this.durability = Math.max(1, this.durability);

        return this;
    }

    shafts(shafts) {
        // (Average Head Durability + Average Extra Durability) * Average Handle Modifier + Average Handle Durability

        let dur = 0;
        let modifier = 0.0;

        for (var shaft of shafts) {
            if (shaft != null) {
                dur += shaft.shaftbonus;
                modifier += shaft.shaftmod;
            }
        }

        dur *= 10; //theoretically variable, not currently though
        modifier /= 1.0 * shafts.length;
        this.durability = Math.round(1.0 * this.durability * modifier);

        // add in handle durability change
        this.durability += Math.round(1.0 * dur / 1.0 * shafts.length);

        this.durability = Math.max(1, this.durability);

        return this;
    }

    fletchings(fletchings) {

        let modifier = 0.0;
        let accuracy = 0.0;
        for (var fletching of fletchings) {
            if (fletching != null) {
                modifier += fletching.fletchmod;
                accuracy += fletching.fletchacc;
            }
        }

        accuracy /= 1.0 * fletchings.length;
        modifier /= 1.0 * fletchings.length;

        this.accuracy = Math.min(1.0, Math.max(0, accuracy));
        this.durability = Math.round(1.0 * this.durability * modifier);
        this.durability = Math.max(1, this.durability);

        return this;
    }
}

module.exports = Tool;