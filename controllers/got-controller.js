/* eslint-disable no-eq-null */
class GameOfThrones {
    constructor(config) {
        this.Data = new (require('../data/google.sheets'))(config.sheets);
        this.characters = config.characters;

        this.cache = {};
        this.cacheTTL = config.cacheTTL;
    }

    fetchFromCache(object) {
        if (this.cache[object] != null && this.cache[object].cachedTime <= Date.now()+this.cacheTTL) {
            return this.cache[object].data;
        }

        return null;
    }

    saveToCache(object, data) {
        this.cache[object] = {
            cachedTime: Date.now(),
            data
        }
    }

    async getCharacterStatuses() {
        let cache = this.fetchFromCache('characters');

        if (cache !== null) {
            return cache;
        }

        let rows = await this.Data.getRows(1, 1, 40);

        let returnArr = [];

        rows.forEach((row) => {
            returnArr.push({
                betsAlive: row.betsalive,
                betsDead: row.betsdead,
                betsWhiteWalker: row.betswhitewalker,
                name: row.character,
                status: row.status

            });
        });

        this.saveToCache('characters', returnArr);

        return returnArr;
    }

    async getUserResponseNames() {
        let cache = this.fetchFromCache('UserResponseNames');

        if (cache !== null) {
            return cache;
        }
        let rows = await this.Data.getRows(0, 1, 40);

        let returnArr = [];

        rows.forEach((row) => {
            returnArr.push({
                name: row.whatsyourname,
                points: 0
            })
        });

        this.saveToCache('UserResponseNames', returnArr);

        return returnArr;
    }
}

module.exports = GameOfThrones;
