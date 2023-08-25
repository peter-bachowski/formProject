import _ from 'lodash';
import '../src/styles/main.scss';
import addBaseElements from './addBaseElements';
import addForm from './addForm';
import loadFormValidations from './loadFormValidations';

addBaseElements();
addForm();
loadFormValidations();