import "./styles.css";

export default function App() {
  return (
    <div className="All">
      <div className="Sebas">
        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQEoZL_ZmQPu9A/profile-displayphoto-shrink_200_200/0/1542853816556?e=2147483647&v=beta&t=sPZ2JLUhPWo6digs0A-dPICBbgZQlvbHz0ItEKCTxI8" />
        <div className="Name">
          <h4 className="Txt_name">Sebastián</h4>
        </div>
      </div>
      <div className="Preferences">
        <div className="Bird">
          <div>
            <h6 className="Bird_name"> Ave preferida</h6>
          </div>
        </div>
        <div className="Animal">
          <div>
            <h6 className="Animal_name"> Animal preferido</h6>
          </div>
        </div>
        <div className="Movie">
          <div>
            <h6 className="Movie_name"> Película preferida</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
