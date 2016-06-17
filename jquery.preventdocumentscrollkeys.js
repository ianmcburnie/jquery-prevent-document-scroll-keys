/**
* @file Prevent main page scroll when pressing any scroll key (e.g. down arrow, spacebar) with focus on given selector
* @author Ian McBurnie <ianmcburnie@hotmail.com>
* @version 0.4.0
* @requires jquery
* @requires jquery-common-keydown
*/
(function($, window, document, undefined) {
    /**
    * Prevent main page scroll when pressing any scroll key (e.g. down arrow, spacebar) with focus on given selector
    *
    * @method "jQuery.focusExit"
    * @return {Object} chainable jQuery class
    */
    $.fn.preventDocumentScrollKeys = function preventDocumentScrollKeys() {
        $(document).commonKeyDown();
        $(this).preventDocumentSpaceKeyScroll();
        $(this).preventDocumentArrowKeyScroll();
    };

    $.fn.preventDocumentSpaceKeyScroll = function preventDocumentSpaceKeyScroll() {
        $(document).on('spaceKeyDown', $(this).selector, function(e) {
            e.preventDefault();
        });
    };

    $.fn.preventDocumentArrowKeyScroll = function preventDocumentArrowKeyScroll() {
        $(document).on('upArrowKeyDown downArrowKeyDown', $(this).selector, function(e) {
            e.preventDefault();
        });
    };
}(jQuery, window, document));
