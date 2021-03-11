function Job(name, email, category, deadline, budget){
  this.name = name;
  this.email = email;
  this.category = category;
  this.deadline = deadline;
  this.budget = budget;
}

//Contact section
$(document).ready(function() {
    $("form#form34A").submit(function(event) {
        // event.preventDefault();
        var name = $("input#MERGE1").val();
        var email = $("input#MERGE0").val();
        var message = $("textarea#comment").val();
        if ($("input#MERGE1").val() && $("input#MERGE0").val()) {
            alert(name + ", we have received your message. Thank you for reaching out to us.");
        } else {
            alert("Please enter your name and email!");
        }
    });
    // side-nav show/hide and form
    $("#close-nav").click(function(){
      $("#header").fadeOut();
    });
    $("#menu-icon").click(function(){
      $("#header").fadeIn();
    });
    // form show/hide
    $("#post-job").click(function(){
      $("#post-job-section div.row").slideToggle("slow");
    });
    //post job button
    $("button#post-job").click(function(event){
      event.preventDefault();
  
      var clientName = $("input#client-name").val();
      var clientEmail = $("input#client-email").val();
      var jobCategory = $("#category option:selected").val();
      var description = $("textarea#job-description").val();
      var budget = $("input#client-budget").val();
      var deadline = $("input#deadline-date").val();

      var newJob = new Job(clientName, clientEmail, jobCategory, description, budget, deadline);
      
      if($("input#client-name").val() && $("input#client-email").val() 
       && $("category option:selected").val()!="" && $("textarea#job-description") && 
       $("input#client-budget") && $("input#deadline-date")){

        $("#job-items").append('<tr><td id="job-category">'+newJob.category +'</td><td id="job-budget">' + newJob.budget + '</td><td id="job-deadline">'+newJob.deadline + '</td><td id="name">'+newJob.name+'</td><td id="email">'+newJob.email+'</td></tr>');
        console.log(newJob);

        $("input#client-name").val("");
        $("input#client-email").val("");
        $("#category option:selected").val("");
        $("textarea#job-description").val("");
        $("input#client-budget").val("");
        $("input#deadline-date").val("");
        $("#post-job-section div.row").slideUp("slow");
       }
       else{
        $("#form-error").show();
       }
  });
});
