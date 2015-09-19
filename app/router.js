import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('universitieslist',{path:'/'}),
  this.route('adminhome',{path:'/dashboard'},function(){
    this.route('dashboard');

    //student list views
    this.route('activestudents',function(){
      this.route('details',function(){
        this.route('profile');
        this.route('payments');
        this.route('faults');
      });
    });
    this.route('completedstudents',function(){
      this.route('details',function(){
        this.route('profile');
        this.route('payments');
        this.route('faults');
      });
    });
    this.route('issuesstudents',function(){
      this.route('details',function(){
        this.route('profile');
        this.route('payments');
        this.route('faults');
      });
    });
    //Lecturers details to follow here
    this.route('fulltimelecturers', function() {
      this.route('details', function(){
        this.route('profile');
        this.route('payments');
        this.route('history');
      });
    });
    this.route('parttimelecturers', function() {
      this.route('details', function(){
        this.route('profile');
        this.route('payments');
        this.route('history');
      });
    });
    this.route('promotionallecturers', function() {
      this.route('details', function(){
        this.route('profile');
        this.route('payments');
        this.route('history');
      });
    });
    //data entry forms
    this.route('newStudentForm');
    this.route('newEmployeeForm');
  });
  this.route('test');


});

export default Router;
