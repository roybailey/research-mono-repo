var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { css } from 'styled-components';
export var Button = styled.button(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  font-size: 1em;\n  margin: 1em;\n  padding: 0.25em 1em;\n  border-radius: 3px;\n  background: none;\n  color: ", ";\n  border: 2px solid ", ";\n\n  ", ";\n"], ["\n  font-size: 1em;\n  margin: 1em;\n  padding: 0.25em 1em;\n  border-radius: 3px;\n  background: none;\n  color: ", ";\n  border: 2px solid ", ";\n\n  ",
    ";\n"])), function (props) { return props.theme.primary || 'violet'; }, function (props) { return props.theme.primary; }, function (props) {
    return props.primary && css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      background: ", ";\n      color: white;\n    "], ["\n      background: ", ";\n      color: white;\n    "])), function (p) { return p.theme.primary || 'violet'; });
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=styledButton.js.map