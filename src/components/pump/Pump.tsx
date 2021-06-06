import React from 'react';
import styles from './Pump.module.css';
import { Form, Button } from 'react-bootstrap';

const Pump: React.FC = () => (
  <div className={styles.Pump} data-testid="Pump">
    <Form>
      <Form.Label>
        Pump Period
      </Form.Label>
      <Form.Text className="text-muted"></Form.Text>
      <Button>Start</Button>
      <Button>Stop</Button>
    </Form>
  </div>
);

export default Pump;
