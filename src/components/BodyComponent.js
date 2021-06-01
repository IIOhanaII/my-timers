import React, { Component } from "react";
import {
  Button,
  CardGroup,
  Card, 
  CardBody, 
  CardTitle,
  ButtonDropdown,
  CustomInput,
  DropdownToggle,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { Timer } from "./TimerComponent";
import { SoundEffectsList } from "./SoundEffectsListComponent";
import { ModalMessages } from "./ModalMessagesComponent";
import { computeTotalTimeInSeconds } from '../utilities/utilities.js';
import { timersNumberLimit } from '../constants/constants.js';
import { v4 as uuidv4 } from "uuid";

export class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputHours: "0",
      inputMinutes: "1",
      inputSeconds: "30",
      inputTimerName: "",
      inputSoundEffectName: "",
      inputSoundEffectUrl: "",
      timers: [],
      modal: false,
      errMess: null,
      dropdownOpen: false
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal() {
    this.setState({ modal: !this.state.modal });

    if (this.state.timers.length === timersNumberLimit) 
      this.setState({ errMess: "Unfortunately, you cannot set additionnal timer :(" });
    else if (this.state.inputHours + this.state.inputMinutes + this.state.inputSeconds === "000")
      this.setState({ errMess: "Please set a timer with at least one second ;)" });
    else
      this.setState({ errMess: null });
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({ [name]: value });
  }

  toggleDropDown() {
    this.setState({ dropdownOpen: !this.state.dropdownOpen });
  }

  handleClick(event) {
    const target = event.target;

    this.setState({
      inputSoundEffectName: target.innerText,
      inputSoundEffectUrl: target.dataset.url,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    let totalTimeInSeconds = computeTotalTimeInSeconds(
      this.state.inputHours,
      this.state.inputMinutes,
      this.state.inputSeconds
    );

    if (totalTimeInSeconds > 0 && this.state.timers.length <= timersNumberLimit - 1) {
      this.setState((state) => {
        const timers = [
          ...state.timers,
          {
            timerHours: state.inputHours,
            timerMinutes: state.inputMinutes,
            timerSeconds: state.inputSeconds,
            timerName: state.inputTimerName,
            timerSoundEffectName: state.inputSoundEffectName,
            timerSoundEffectUrl: state.inputSoundEffectUrl,
            timerID: uuidv4()
          }
        ];
        const errMess = null;

        return {
          timers,
          errMess
        };
      });

      this.toggleModal();
    } 
    else if (this.state.timers.length === timersNumberLimit)
      this.setState({ errMess: "Unfortunately, you cannot set additionnal timer :(" });
    else
      this.setState({ errMess: "Please set a timer with at least one second ;)" });
  }

  delete(timer) {
    const timers = this.state.timers.filter((timerToKeep) => timerToKeep.timerID !== timer.timerID);
    this.setState({ timers });
  }

  render() {

    const timersList = this.state.timers.map((timer) => (
      <Card key={timer.timerID} className="bg-transparent border-0 ml-5 mr-5">
        <CardBody className="p-0">
          <CardTitle>
            <Button className="text-info" onClick={this.delete.bind(this, timer)} close/>
          </CardTitle>
          <Timer
            timerHours={timer.timerHours}
            timerMinutes={timer.timerMinutes}
            timerSeconds={timer.timerSeconds}
            timerName={timer.timerName}
            timerSoundEffectName={timer.timerSoundEffectName}
            timerSoundEffectUrl={timer.timerSoundEffectUrl}
            computeTotalTimeInSeconds={computeTotalTimeInSeconds}
          />
        </CardBody>
      </Card>
    ));

    return (
      <div className="container">
        <div className="row justify-content-center mb-5">
          <Button color="info" outline className="font-button glow" onClick={this.toggleModal}>New Timer</Button>
          <Modal isOpen={this.state.modal} toggle={this.toggleModal} onSubmit={this.handleSubmit}>
            <ModalHeader toggle={this.toggleModal} className="text-primary">Set a timer</ModalHeader>
            <ModalBody>
              <Form className="col text-center">
                <FormGroup>
                  <Label for="inputHours" className="text-info">
                    {this.state.inputHours > 1
                      ? this.state.inputHours + " hours"
                      : this.state.inputHours + " hour"}
                  </Label>
                  <CustomInput
                    type="range"
                    id="inputHours"
                    name="inputHours"
                    min="0"
                    max="23"
                    value={this.state.inputHours}
                    onChange={this.handleChange}
                    onInput={this.handleChange}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="inputMinutes" className="text-info">
                    {this.state.inputMinutes > 1
                      ? this.state.inputMinutes + " minutes"
                      : this.state.inputMinutes + " minute"}
                  </Label>
                  <CustomInput
                    type="range"
                    id="inputMinutes"
                    name="inputMinutes"
                    min="0"
                    max="59"
                    value={this.state.inputMinutes}
                    onChange={this.handleChange}
                    onInput={this.handleChange}
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="inputSeconds" className="text-info">
                    {this.state.inputSeconds} s
                  </Label>
                  <CustomInput
                    type="range"
                    id="inputSeconds"
                    name="inputSeconds"
                    min="0"
                    max="59"
                    value={this.state.inputSeconds}
                    onChange={this.handleChange}
                    onInput={this.handleChange}
                  />
                </FormGroup>

                <Input
                  type="text"
                  id="inputTimerName"
                  name="inputTimerName"
                  placeholder="Name this timer"
                  value={this.state.inputTimerName}
                  onChange={this.handleChange}
                  onInput={this.handleChange}
                  className="mb-3"
                />

                <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown} className="mb-3">
                  <DropdownToggle caret color="primary">Add a Sound Effect</DropdownToggle>
                  <SoundEffectsList handleClick={this.handleClick} />
                </ButtonDropdown>

                <ModalMessages 
                  inputSoundEffectName={this.state.inputSoundEffectName} 
                  errMess={this.state.errMess} 
                />

                <ModalFooter>
                  <Button type="submit" value="submit" color="primary">Go!</Button>{' '}
                  <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                </ModalFooter>
              </Form>
            </ModalBody>
          </Modal>
        </div>
        <CardGroup>
          {timersList}
        </CardGroup>
      </div>
    );
  }
}
