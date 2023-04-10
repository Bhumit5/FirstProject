function showFeedback(arr) {
    document.getElementById("feedbacks").innerHTML += `
        <div class="card mb-3 p-3 w-100 rounded-4 border-0" style="background-color: #FFD698;">
            <div class="row g-0 container">
                <div class="col-2 col-md-2 col-lg-1 d-flex align-items-center">
                    <img src="/Images/person.png" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-10 col-md-10 col-lg-11">
                    <div class="card-body">
                        <h5 class="card-title text-decoration-underline">Mr. Patel</h5>
                        <p class="card-text my-0">${arr}</p>
                        <p class="card-text mb-0"><small class="text-muted">Date & Time</small></p>
                    </div>
                </div>
            </div>
        </div>`;
}

let feedback = [
    "I love the cozy atmosphere and delicious coffee at Brown Love Cafe! The staff is always friendly and welcoming, making it a great place to relax and catch up with friends.",

    "Brown Love Cafe has quickly become my go-to spot for coffee and pastries. The quality of the products and the excellent customer service keep me coming back time and time again.",

    "I recently hosted an event at Brown Love Cafe and was blown away by the attention to detail and personalized service. The team went above and beyond to make our gathering a success, and the decorations and catering were absolutely perfect.",

    "The coffee at Brown Love Cafe is simply the best. I appreciate the attention to detail and the care that goes into every cup. It's clear that the staff is passionate about their craft and committed to providing a top-notch experience for their customers.",

    "I can't say enough good things about Brown Love Cafe. From the friendly staff to the delicious food and beverages, it's clear that this is a business that truly cares about its customers. I always leave feeling happy and satisfied.",
  ]
for (let response of feedback){
    showFeedback(response);
}


function addFeedback() {
  let respond = document.getElementById("feedback").value;
  let result = respond.search(/[a-zA-Z0-9]+/);
  console.log(result);
  if(result != -1){
      showFeedback(respond);
      document.getElementById("feedback").value = "";
    } 
}
