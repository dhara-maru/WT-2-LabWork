import React from 'react'

const Contact = () => {
  return (
    <div>
      <section class="container my-5">
    <div class="row align-items-center">
        <div class="col-md-6">
            <h2>Contact Us</h2>
            <p class="text-muted">
                Have questions or need assistance? Feel free to reach out to us. Our team is available 24/7 to help you!
            </p>
            <ul class="list-unstyled">
                <li><i class="fas fa-map-marker-alt text-primary"></i> 123, Ecomm Street, New York, USA</li>
                <li><i class="fas fa-phone text-primary"></i> +1 234 567 890</li>
                <li><i class="fas fa-envelope text-primary"></i> support@ecomm.com</li>
            </ul>
            <img src="https://i.etsystatic.com/14482816/r/il/146edd/6234190901/il_1080xN.6234190901_dbmz.jpg" class="img-fluid rounded shadow mt-3" alt="Contact Us"/>
        </div>
        <div class="col-md-6">
            <h5>Find Us on Google Maps</h5>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609842626!2d-74.25986760336818!3d40.69767006391037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c250bd3d1e20b3%3A0x21624c52d0f8a523!2sNew%20York!5e0!3m2!1sen!2sus!4v1707666049021!5m2!1sen!2sus" 
                width="100%" height="250"  allowfullscreen="" loading="lazy">
            </iframe>
        </div>
    </div>
</section>
    </div>
  )
}

export default Contact
