import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Card body className="text-center">
        <CardTitle>Add a new class!</CardTitle>
        <Button>Click Here</Button>
      </Card>
    </div>
  );
};

export default Example;