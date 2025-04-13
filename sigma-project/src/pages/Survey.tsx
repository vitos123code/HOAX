import '../styles/Survey.css';

export default function Survey() {
  return (
    <main className="survey-page">

      <form className="survey-form">
        <div className="form-group">
          <label>1. How are you feeling today?</label>
          <input type="text" placeholder="Type your answer..." />
        </div>

        <div className="form-group">
          <label>2. What area are you planning to work on?</label>
          <div className="checkbox-group">
            <label><input type="checkbox" /> Productivity</label>
            <label><input type="checkbox" /> Health</label>
            <label><input type="checkbox" /> Relationships</label>
            <label><input type="checkbox" /> Mental well-being</label>
          </div>
        </div>


        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
