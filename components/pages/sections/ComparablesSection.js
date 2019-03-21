import React from 'react';
import { MDBCard, MDBCardBody, MDBIcon, MDBRow, MDBCol, MDBCardText } from 'mdbreact';

const Comparables = () => {
  return (
    <MDBRow className="mb-3">
        <MDBCol xl="3" md="6" className="mb-r">
          <MDBCard className="cascading-admin-card">
              <div className="admin-up">
                <div className="data">
                  
                </div>
              </div>
              <MDBCardBody>
                <MDBRow>
                  <h5>Address</h5>
                  
                </MDBRow>
                <MDBRow>
                  <h5>Comparable GLA</h5>
                  
                </MDBRow>
                <MDBRow>
                  <h5>Size Difference</h5>
                  
                </MDBRow>
                <MDBRow>
                  <h5>GLA Adjustment Per Square Foot</h5>
                  
                </MDBRow>
                <MDBRow>
                  <h5>Total Adjustment (Space Only)</h5>
                  
                </MDBRow>
                <MDBRow>
                  <h5>Rounded Ajustment</h5>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
        </MDBCol>
        <MDBCol xl="3" md="6" className="mb-r">
          <MDBCard className="cascading-admin-card">
              <div className="admin-up">
              
                <div className="data">
                  <p>Comparable 1</p>
                  <h4>
                    <strong>123 Pondoray Circle</strong>
                  </h4>
                </div>
              </div>
              <MDBCardBody>
                <div className="progress">
                  <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar bg grey" role="progressbar"
                    style={{width: '25%'}}></div>
                </div>
                <MDBCardText>Worse than last week (25%)</MDBCardText>
              </MDBCardBody>
            </MDBCard>
        </MDBCol>
        <MDBCol xl="3" md="6" className="mb-r">
          <MDBCard className="cascading-admin-card">
              <div className="admin-up">
              <MDBIcon icon="chart-pie" className="light-blue lighten-1"/>
                <div className="data">
                  <p>TRAFFIC</p>
                  <h4>
                    <strong>20000</strong>
                  </h4>
                </div>
              </div>
              <MDBCardBody>
                <div className="progress">
                  <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar grey darken-2" role="progressbar"
                    style={{width: '75%'}}></div>
                </div>
                <MDBCardText>Worse than last week (75%)</MDBCardText>
              </MDBCardBody>
            </MDBCard>
        </MDBCol>
        <MDBCol xl="3" md="6" className="mb-r">
          <MDBCard className="cascading-admin-card">
              <div className="admin-up">
              <MDBIcon icon="chart-bar" className="red accent-2"/>
                <div className="data">
                  <p>ORGANIC TRAFFIC</p>
                  <h4>
                    <strong>2000</strong>
                  </h4>
                </div>
              </div>
              <MDBCardBody>
                <div className="progress">
                  <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar bg-primary" role="progressbar"
                    style={{width: '25%'}}></div>
                </div>
                <MDBCardText>Better than last week (25%)</MDBCardText>
              </MDBCardBody>
            </MDBCard>
        </MDBCol>
      </MDBRow>
  )
}

export default Comparables;

