//contact.jsx, Syed Kazmi, 301330922, 2024/05/31
export default function Contact() {
        return (
          <>
            <h1>Contact Me</h1>

  
<div class="contact-info-panel">
  <h2>Contact Information</h2>
  <p>
    You can reach me using the following contact information:
  </p>
  <ul>
    <li><strong>Email:</strong> skazmi22@my.centennialcollege.ca</li>
    <li><strong>Phone:</strong> +123-456-7890</li>
    <li><strong>Address:</strong> Centennial College, Progress Campus</li>
  </ul>
</div>


<div class="contact-form-panel">
  <form action="/contact" method="post">
    <div class="form-group">
      <label for="firstName">First Name</label>
      <input type="text" id="firstName" name="firstName" required></input>
    </div>
    <div class="form-group">
      <label for="lastName">Last Name</label>
      <input type="text" id="lastName" name="lastName" required></input>
    </div>
    <div class="form-group">
      <label for="contactNumber">Contact Number</label>
      <input type="text" id="contactNumber" name="contactNumber" required></input>
    </div>
    <div class="form-group">
      <label for="email">Email Address</label>
      <input type="text" id="email" name="email" required></input>
    </div>
    <div class="form-group">
      <label for="message">Message</label>
      <textarea id="message" name="message" required></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Send Message</button>
  </form>
</div>
          </>
        );
      }
    