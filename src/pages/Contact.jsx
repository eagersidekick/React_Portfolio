export default function Contact() {
  return (
    <div>
      <h1>Contact Me</h1>
      <div class="container">
      <form>
        <div class="form-group">
          <label for="name">Name</label>
          <input type="name" class="form-control" id="nameInput" placeholder="Enter name"/>
        </div>
        <div class="form-group">
          <label for="email">E-mail</label>
          <input type="email" class="form-control" id="emailInput" placeholder="Enter E-mail"/>
        </div>
        <div class="form-group">
          <lable for="message">Message</lable>
          <textarea type="message" class="form-control" rows="3" id="messageInput" placeholder="Enter Message"/>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
    </div>
  );
}
