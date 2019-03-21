import React from 'react'
import { MDBCard, MDBCol, MDBRow, MDBView, MDBMask, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBIcon, } from 'mdbreact';
import GLAInput from "./sections/GLAInputForm.js";
import CalculationForm from "./sections/CalculationForm.js";
import Comparables from "./sections/ComparablesSection.js";

const ProfilePage = (props) => {
  return (
    <React.Fragment>
      <form>
        <MDBRow className="justify-content-center">
        <MDBCol md="6" lg="9">
        <section className="text-center pb-3">
          <MDBRow className="d-flex justify-content-center">
            <MDBCol lg="3" xl="6" className="mb-3">
              <MDBCard className="d-flex mb-5">
              <MDBCardBody>

              <MDBCardTitle className="font-bold mb-3">
                    <strong>Subject Information</strong>
                  </MDBCardTitle>
                <GLAInput />
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="3" xl="6" className="mb-3">
              <MDBCard className="d-flex mb-5">
                <MDBView>
                  <img src="https://mdbootstrap.com/img/Mockups/Horizontal/6-col/pro-signup.jpg" alt="Project" className="img-fluid"/>
                  <MDBMask overlay="white-slight"/>
                </MDBView>
                <MDBCardBody>
                  <MDBCardTitle className="font-bold mb-3">
                    <strong>Project name</strong>
                  </MDBCardTitle>
                  <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
                </MDBCardBody>
                <MDBCardFooter className="links-light profile-card-footer">
                  <span className="right">
                    <a className="p-2" href="#profile">
                      Live Preview
                      <MDBIcon icon="image" className="ml-1"/>
                    </a>
                  </span>
                </MDBCardFooter>
              </MDBCard>
            </MDBCol>
          </MDBRow>
          <MDBRow className="d-flex justify-content-center">
            <MDBCol lg="12" xl="12" className="mb-3">
              <MDBCard className="d-flex mb-5">
              <MDBCardBody>
                  <MDBCardTitle className="font-bold mb-9">
                    <strong>Calculation of "Space Only" Adjustment (Price Per Square Foot)</strong>
                  </MDBCardTitle>
                  <CalculationForm />
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
          <MDBRow className="d-flex justify-content-center">
            <MDBCol lg="12" xl="12" className="mb-3">
              <MDBCard className="d-flex mb-12">
              <MDBCardBody>
                  <MDBCardTitle className="font-bold mb-9">
                    <strong>Size Adjustments by Comparable</strong>
                  </MDBCardTitle>
                <MDBView>
                  <Comparables />
                  <MDBMask overlay="white-slight"/>
                </MDBView>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBCol>
    </MDBRow>
    </form>
    </React.Fragment>
  );
}

export default ProfilePage;