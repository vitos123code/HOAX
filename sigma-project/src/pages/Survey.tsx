import '../styles/Survey.css';

export default function Survey() {
  return (
    <main className="survey-page">
      <form className="survey-form">
        <h2>Survey</h2>
        <div className="form-group">
          <label className="question-label">
            1. What topic resonates with your goals?
          </label>
          <div className="radio-group">
            <label>
              <input type="radio" name="goalTopic" value="coming-of-age" />
              Coming of Age – personal growth, self-discovery, youth to adulthood
            </label>
            <label>
              <input type="radio" name="goalTopic" value="revenge" />
              Revenge or Justice – moral dilemmas, vigilante characters
            </label>
            <label>
              <input type="radio" name="goalTopic" value="self-help" />
              Self-Help – motivation, productivity, confidence, mental wellness
            </label>
            <label>
              <input type="radio" name="goalTopic" value="business" />
              Business & Money – entrepreneurship, investing, success stories
            </label>
            <label>
              <input type="radio" name="goalTopic" value="health" />
              Health & Wellness – fitness, nutrition, mental health
            </label>
            <label>
              <input type="radio" name="goalTopic" value="survival" />
              Survival – characters overcoming disasters or harsh environments
            </label>
          </div>
        </div>
        <button type="submit">Next</button>
      </form>
    </main>
  );
}
