import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    return (
      <div>
          <footer>
            <div className="form" style={{ margin: "30px 20px" }}>
              <form style={{ margin: "30px 20px" }}>
                <label for="fname">
                  <b>First Name:</b>{" "}
                </label>
                <input
                  style={{ margin: "10px 10px", height: "20px" }}
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Your name.."
                />
                <br />
                <label for="lname">
                  <b>Last Name:</b>{" "}
                </label>
                <input
                  style={{ margin: "10px 10px", height: "20px" }}
                  type="text"
                  id="lname"
                  name="lastname"
                  placeholder="Your last name.."
                />
                <br />
                <label for="subject">
                  <b>Comment:</b>{" "}
                </label>
                <input
                  style={{
                    margin: "10px 10px",
                    height: "60px",
                    width: "230px",
                  }}
                  type="text"
                  id="lname"
                  name="lastname"
                  placeholder="Your Comment"
                />
                <br />
                <button
                  onClick={() => alert("Mesajiniz Gonderildi")}
                  className="subbutton"
                >
                  Submit
                </button>
              </form>
            </div>
          </footer>
      </div>
    )
  }
}
