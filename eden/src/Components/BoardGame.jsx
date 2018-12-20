import React, { Component } from 'react';
import Heading from '../Container/Heading';
import background from '../Assets/Images/background.png';
import { Container, Row, Col } from 'reactstrap';
import NextDay from '../Container/NextDay';
import '../Assets/Style/boardGame.css';
import ButtonQuestions from '../Container/ButtonQuestions';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Popover } from "react-bootstrap";

class BoardGame extends Component {
  render() {
    return (
      <div className="App">
        <Heading />
        <Container id="gameCanvas">
          <Row>
            <Col sm="12">
              <div className="boardgame">
                  <Popover placement="top">
                    As-tu envoyé un fichier par internet à une personne présente dans la même salle que toi cette semaine ?

                    {this.props.popUpContent[this.props.day].question}
                  </Popover>
                <img src={background} className="img-fluid" alt="" />
                <div className="menu-choice">
                  <ButtonQuestions />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <NextDay />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

const mapStateToProps = state => ({
  popUpContent: state.questionReducer.popUpContent,
  day: state.dayReducer.day,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardGame);

