export default class ChargedBalls extends Plugin {
    prestart() {
        ig.ENTITY.Player.inject({
            /**
             * @param {'THROW_NORMAL' | 'THROW_CHARGED' | 'THROW_NORMAL_REV' | 'THROW_CHARGED_REV' | 'THROW_SPECIAL1'} type
             */
            startThrowAction(type, data) {
                switch(type) {
                case 'THROW_NORMAL':
                    return this.parent('THROW_CHARGED', data);
                case 'THROW_NORMAL_REV':
                    return this.parent('THROW_CHARGED_REV', data);
                default:
                    return this.parent(type, data);
                }
            }
        });
    }
}