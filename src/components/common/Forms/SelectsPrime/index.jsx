import { Dropdown } from 'primereact/dropdown';
import React, { useState } from 'react';

export const SelectPrime = ({ values, placeholder }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const onValueChange = (e) => {
    setSelectedValue(e.value);
  };
  const selectedValueTemplate = (option, props) => {
    if (option) {
      return (
        <div className="country-item country-item-value">
          <div>{option.name}</div>
        </div>
      );
    }

    return <span>{props.placeholder}</span>;
  };
  const valueOptionTemplate = (option) => {
    return (
      <div className="country-item">
        <div>{option.name}</div>
      </div>
    );
  };

  return (
    <Dropdown
      value={selectedValue}
      options={values}
      onChange={onValueChange}
      optionLabel="name"
      showClear
      filterBy="name"
      placeholder={placeholder}
      valueTemplate={selectedValueTemplate}
      itemTemplate={valueOptionTemplate}
      style={{
        width: '75%',
        heigth: '50px',
        margin: '10px 0px',
        backgroundColor: '#fff',
        border: 'none',
        borderRadius: '45px',
        alignSelf: 'center',
        padding: '0px 15px',
        boxShadow: 'none',
      }}
    />
  );
};
