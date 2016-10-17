/**
* @file Prevent scrolling when pressing any scroll key (e.g. down arrow,
* spacebar) with focus on given selector
* @author Ian McBurnie <ianmcburnie@hotmail.com>
* @version 0.5.1
* @requires jquery
*/
(function($, window, document, undefined) {
    /**
    * Prevent scrolling when pressing any scroll key (e.g. down arrow, spacebar)
    * with focus on given selector
    *
    * @method "jQuery.preventScrollKeys"
    * @param {string} selector - event delegation descendant
    * @return {Object} chainable jQuery class
    */
    $.fn.preventScrollKeys = function preventScrollKeys(selector) {
        return this.each(function onEach() {
            $(this).on('keydown', selector, function(e) {
                if ((e.keyCode >= 32 && e.keyCode <= 36) || e.keyCode === 38 || e.keyCode === 40) {
                    e.preventDefault();
                }
            });
        });
    };
}(jQuery, window, document));
