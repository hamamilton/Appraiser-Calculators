import React from 'react';
import { MDBInput } from 'mdbreact';
//import QualitySelect from '../../QualitySelect';

const CalculationForm = () => {
    return (
      <div>
    <p className="h5 text-center mb-4"></p>
      <div className="grey-text">
        <MDBInput
          label="Cost New-Entire Structure"
          group
          type="text"
          id="formCostNewEntireStructure"
        />
        <MDBInput
          label="Base Percent of New Living Space Only"
          group
          type="text"
          id="formBasePercent"
        />
        <MDBInput
          label="Less Depreciation"
          group
          type="text"
          id="formDepreciation"
        />
        <MDBInput
            label="Depreciation (Straight Line)"
            group
            type="text"
            validate
            error="wrong"
            success="right"
            name="slDepreciation"
              />
        <MDBInput
          label="Depreciated Cost of Space Only"
          group
          type="text"
          id="formDepreciatedCost"
        />
        <MDBInput
          label="Adjustment Per Square Foot for GLA"
          group
          type="text"
          id="formIndicatedAdjustment"
        />
        </div>
        </div>
  );
    }
export default CalculationForm;