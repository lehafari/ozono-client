import React from 'react';
import parse from 'html-react-parser';
import Textarea2 from 'components/common/Forms/TextArea2';
import { Editor } from 'primereact/editor';

export const Description = ({ description, title }) => {
  return (
    <div>
      <Editor
        type="text"
        value={description}
        style={{ height: '400px' }}
        readOnly
        headerTemplate={
          <h2
            style={{
              textAlign: 'center',
            }}
          >
            {title}
          </h2>
        }
      />
    </div>
  );
};
