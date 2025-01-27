  import '../css/pages/home.css';
  import '../css/pages/feedback.css';
  import feedbacksData from '../json/feedbacks.json';
  
  import { useState, useEffect } from 'react';

  type IFeedback = {
    texto: string;
    nome: string;
    local: string;
    imagem: string;
  };

  function FeedBack() {
    const [feedbacks, setFeedBacks] = useState<IFeedback[]>([]);
    const [selectedFeedback, setSelectedFeedback] = useState<number>(0);

    useEffect(() => {
      setFeedBacks(feedbacksData);
    }, []);

    const handleImageClick = (index: number) => {
      setSelectedFeedback(index);
    };  

    return (
      <>
        <div className='section d-grid align-i-c'>
          <div className='title-container'>
            <h1 className='text-tertiary title'>EXPERIÊNCIAS ANDINAS</h1>
            <h2 className='text-secondary sub-title'>Veja o que estão falando das experiências andinas</h2>
          </div>
          <div className='d-flex center align-b container-feedback'>
            <div className="d-grid img-list">
              {feedbacks.map((feedback, index) => (
                <img
                  key={index}
                  className={`img-tour ${selectedFeedback === index ? 'active' : ''}`}
                  src={`/public/feedbacks/${feedback.imagem}`}
                  alt={`${feedback.imagem}`}
                  onClick={() => handleImageClick(index)}
                />
              ))}
            </div>
            <div className="feedback-text">
              {feedbacks.length > 0 && (
                <>
                  <p className="feedback">{feedbacks[selectedFeedback].texto}</p>
                  <div className="d-grid grid-e">
                    <h3 className="text-secondary name">{feedbacks[selectedFeedback].nome}</h3>
                    <p className="city">- {feedbacks[selectedFeedback].local}</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </>
    )
  }

  export default FeedBack;