import {compose, moveHorizontal, parseAttributes} from './../helpers/functions';

/**
 * @property defaults
 * @type {Object}
 */
const defaults = {
    x: 0,
    y: 0,
    width: 100,
    height: 100
};

/**
 * @module Penne
 * @submodule Rectangle
 * @extends {Shape}
 * @author Adam Timberlake
 * @link https://github.com/Wildhoney/Penne
 */
export default class Shape {

    /**
     * @constructor
     * @param {Object} [attributes=defaults]
     * @return {Shape}
     */
    constructor(attributes = defaults) {
        this.attributes = parseAttributes(Object.assign(defaults, attributes));
    }

    /**
     * @method moveHorizontal
     * @param {Number} value
     * @return {void}
     */
    moveHorizontal(value) {
        compose(moveHorizontal(value))(this);
    }

    /**
     * @method getAttribute
     * @return {*}
     */
    getAttribute(property) {
        return this.attributes[property];
    }

    /**
     * @method setAttribute
     * @param {String} property
     * @param {*} value
     * @return {void}
     */
    setAttribute(property, value) {
        const attributes     = { ...this.attributes };
        attributes[property] = value;
        this.attributes      = parseAttributes(attributes);
    }

}
