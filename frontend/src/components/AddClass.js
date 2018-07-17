import React from 'react';
import { Card, Button, CardTitle } from 'reactstrap';

const AddClass = (props) => {
  return (
    <div>
      <Card body className="text-center">
        <CardTitle>Add a new class!</CardTitle>
        <Button>Click Here</Button>
      </Card>
    </div>
  );
};

export default AddClass;