import { Label, Input } from './Filter.styled';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <Label>
    Filter:
    <Input name="filter" type="text" value={value} onChange={onChange} />
  </Label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
