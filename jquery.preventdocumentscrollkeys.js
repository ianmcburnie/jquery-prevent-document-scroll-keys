/**
* @file Prevent main page scroll when pressing any scroll key (e.g. down arrow, spacebar) with focus on given selector
* @author Ian McBurnie <ianmcburnie@hotmail.com>
* @version 0.4.1
* @requires jquery
* @requires jquery-common-keydown
*/
(function($, window, document, undefined) {
    /**
    * Prevent main page scroll when pressing any scroll key (e.g. down arrow, spacebar) with focus on given selector
    *
    * @method "jQuery.preventDocumentScrollKeys"
    * @return {Object} chainable jQuery class
    */
    $.fn.preventDocumentScrollKeys = function preventDocumentScrollKeys() {
        var $this = $(this);
        $(this).commonKeyDown();
        $(this).preventDocumentSpaceKeyScroll();
        $(this).preventDocumentArrowKeyScroll();
    };

    /**
    * Prevent main page scroll when pressing spacebar with focus on given selector
    *
    * @method "jQuery.preventDocumentSpaceKeyScroll"
    * @return {Object} chainable jQuery class
    */
    $.fn.preventDocumentSpaceKeyScroll = function preventDocumentSpaceKeyScroll() {
        $(this).on('spaceKeyDown', function(e) {
            e.preventDefault();
        });
    };

    /**
    * Prevent main page scroll when pressing up and down arrow keys with focus on given selector
    *
    * @method "jQuery.preventDocumentArrowKeyScroll"
    * @return {Object} chainable jQuery class
    */
    $.fn.preventDocumentArrowKeyScroll = function preventDocumentArrowKeyScroll() {
        $(this).on('upArrowKeyDown downArrowKeyDown', function(e) {
            e.preventDefault();
        });
    };
}(jQuery, window, document));
