import React, {useState} from 'react';
import {View, Text, TextInput, ScrollView} from 'react-native';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import OrderDetails from '../../Components/OrderDetails/OrderDetails';
import Shipment from '../../Components/Shipment/Shipment';
import StepAddress from '../../Components/StepAddress/StepAddress';
import CheckBox from '@react-native-community/checkbox';
import styles from './styles';

function Payment({navigation, route}) {
  const {fromSaved} = route.params;
  const [isSelected, setSelection] = useState(false);
  const [saveAddr, setSaveAddr] = useState(false);
  const [saveShipment, setSaveShipment] = useState(false);
  const [submit, setSubmit] = useState(false);

  return (
    <View>
      <ScrollView>
        <ProgressSteps>
          <ProgressStep label="Address" onNext={() => setSaveAddr(!saveAddr)}>
            <StepAddress saveAddr={saveAddr} />
          </ProgressStep>

          <ProgressStep
            label="Shipment Method"
            onNext={() => setSaveShipment(true)}>
            <Shipment />
          </ProgressStep>
          <ProgressStep label="Order Details">
            <OrderDetails />
          </ProgressStep>
          <ProgressStep label="Payment">
            <View style={styles.checkboxContainer}>
              <CheckBox
                value={isSelected}
                onValueChange={() => setSelection(!isSelected)}
                style={styles.checkbox}
                onAnimationType="bounce"
              />
              <Text>Direct Wire Transfer</Text>
            </View>
          </ProgressStep>
        </ProgressSteps>
      </ScrollView>
    </View>
  );
}

export default Payment;
