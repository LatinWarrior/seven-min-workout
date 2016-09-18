angular.module('workout').component('workoutComponent', {
    templateUrl: 'app/partials/workout.html',
    bindings: {

    },
    controller: WorkoutController
});

WorkoutController['$inject'] = [];
function WorkoutController() {

    var restExercise;
    var workoutPlan;

    var init = function(){
        startWorkout();
    };

    init();

}