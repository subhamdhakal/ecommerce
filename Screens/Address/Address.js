import React from 'react';
import {View, Text, TextInput, ScrollView} from 'react-native';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import Shipment from '../../Components/Shipment/Shipment';
import StepAddress from '../../Components/StepAddress/StepAddress';

function Address() {
  return (
    <View>
      <ScrollView>
        <ProgressSteps>
          <ProgressStep label="Address">
            <StepAddress />
          </ProgressStep>

          <ProgressStep label="Shipment Method">
            <Shipment />
          </ProgressStep>
          <ProgressStep label="Order Details">
            <View>
              <Text>Page one</Text>
            </View>
          </ProgressStep>
          <ProgressStep label="Payment">
            <View>
              <Text>Page one</Text>
            </View>
          </ProgressStep>
        </ProgressSteps>
      </ScrollView>
    </View>
  );
}

export default Address;
