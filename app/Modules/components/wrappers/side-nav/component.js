import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    // Perfect Scrollbar
    $('select').not('.disabled').material_select();

    //for normal side-vav
    var leftnav = $(".page-topbar").height();
    var leftnavHeight = window.innerHeight - leftnav;
    $('.leftside-navigation').height(leftnavHeight).perfectScrollbar({
    suppressScrollX: true
    });


 }.on('didInsertElement')
});
