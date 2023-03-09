export default function subscribe() {
  return (
    <>
    <h1 className="heading--primary">enjoy your free time with us </h1>
  
    <form className="container form">
      <div className="form__gp">
        <label for="email" className="form__label">
          email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="form__input"
          required
        />
      </div>
      <div className="form__gp">
        <label for="full name" className="form__label">
          name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="form__input"
          required
        />
      </div>
      <div className="form__gp">
        <label for="password" className="form__label">
        password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="form__input"
          required
        />
      </div>
      <div className="form__gp">
        <label 
        for="visa" 
        className="form__label">
          visa
        </label>
        <input
         id="visa" 
         type="tel" 
         inputmode="numeric"
          pattern="[0-9\s]{13,19}" autocomplete="cc-number"
           maxlength="19"
            placeholder="xxxx xxxx xxxx xxxx"
            className="form__input"
            required
            />
      </div>

      <button className="btn--secondary">subscribe now</button>
    </form>
    </>
  );
}
