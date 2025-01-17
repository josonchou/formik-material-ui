import MuiTextField from '@material-ui/core/TextField';
import MuiSwitch from '@material-ui/core/Switch';
import MuiCheckbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MuiSelect from '@material-ui/core/Select';
import { getIn } from 'formik';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import { createElement } from 'react';
import MuiRadioGroup from '@material-ui/core/RadioGroup';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

var fieldToTextField = function (_a) {
    var field = _a.field, form = _a.form, _b = _a.disabled, disabled = _b === void 0 ? false : _b, props = __rest(_a, ["field", "form", "disabled"]);
    var name = field.name;
    var touched = form.touched, errors = form.errors, isSubmitting = form.isSubmitting;
    var fieldError = getIn(errors, name);
    var showError = getIn(touched, name) && !!fieldError;
    return __assign({}, props, field, { error: showError, helperText: showError ? fieldError : props.helperText, disabled: isSubmitting || disabled });
};
var TextField = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (createElement(MuiTextField, __assign({}, fieldToTextField(props), { children: children })));
};
TextField.displayName = 'FormikMaterialUITextField';

var fieldToSwitch = function (_a) {
    var field = _a.field, isSubmitting = _a.form.isSubmitting, _b = _a.disabled, disabled = _b === void 0 ? false : _b, props = __rest(_a, ["field", "form", "disabled"]);
    return __assign({ disabled: isSubmitting || disabled }, props, field, { value: field.name, checked: field.value });
};
var Switch = function (props) { return createElement(MuiSwitch, __assign({}, fieldToSwitch(props))); };
Switch.displayName = 'FormikMaterialUISwitch';

var fieldToCheckbox = function (_a) {
    var field = _a.field, isSubmitting = _a.form.isSubmitting, _b = _a.disabled, disabled = _b === void 0 ? false : _b, props = __rest(_a, ["field", "form", "disabled"]);
    return __assign({ disabled: isSubmitting || disabled }, props, field, { checked: field.value, value: field.value ? Boolean('checked') : Boolean('') });
};
var Checkbox = function (props) { return createElement(MuiCheckbox, __assign({}, fieldToCheckbox(props))); };
Checkbox.displayName = 'FormikMaterialUICheckbox';

var CheckboxWithLabel = function (_a) {
    var Label = _a.Label, props = __rest(_a, ["Label"]);
    return (createElement(FormControlLabel, __assign({ control: createElement(MuiCheckbox, __assign({}, fieldToCheckbox(props))) }, Label)));
};
CheckboxWithLabel.displayName = 'FormikMaterialUICheckboxWithLabel';

var fieldToSelect = function (_a) {
    var field = _a.field, isSubmitting = _a.form.isSubmitting, _b = _a.disabled, disabled = _b === void 0 ? false : _b, props = __rest(_a, ["field", "form", "disabled"]);
    return __assign({ disabled: isSubmitting || disabled }, props, field);
};
var Select = function (props) { return createElement(MuiSelect, __assign({}, fieldToSelect(props))); };
Select.displayName = 'FormikMaterialUISelect';

var SimpleFileUpload = function (_a) {
    var label = _a.label, field = _a.field, _b = _a.form, touched = _b.touched, errors = _b.errors, isSubmitting = _b.isSubmitting, setFieldValue = _b.setFieldValue, _c = _a.disabled, disabled = _c === void 0 ? false : _c;
    var error = getIn(touched, field.name) && getIn(errors, field.name);
    return (createElement("div", null,
        createElement(FormControl, null,
            label && (createElement(InputLabel, { shrink: true, error: !!error }, label)),
            createElement(Input, { error: !!error, inputProps: {
                    type: 'file',
                    disabled: disabled || isSubmitting,
                    name: field.name,
                    onChange: function (event) {
                        var file = event.currentTarget.files[0];
                        setFieldValue(field.name, file);
                    },
                } }),
            error && createElement(FormHelperText, { error: true }, error))));
};

var fieldToRadioGroup = function (_a) {
    var field = _a.field, form = _a.form, props = __rest(_a, ["field", "form"]);
    return (__assign({}, props, field));
};
var RadioGroup = function (props) {
    return createElement(MuiRadioGroup, __assign({}, fieldToRadioGroup(props)));
};
RadioGroup.displayName = 'FormikMaterialUIRadioGroup';

export { fieldToTextField, TextField, fieldToSwitch, Switch, fieldToCheckbox, Checkbox, CheckboxWithLabel, fieldToSelect, Select, SimpleFileUpload, fieldToRadioGroup, RadioGroup };
//# sourceMappingURL=formik-material-ui.es6.js.map
