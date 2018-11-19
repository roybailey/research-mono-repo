'use strict';
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
var ServiceGroup = styled.div.attrs({ cid: 'ServiceGroup' })(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin: 3em 0;\n  padding: 0;\n  box-sizing: border-box;\n  text-align: center;\n"], ["\n  margin: 3em 0;\n  padding: 0;\n  box-sizing: border-box;\n  text-align: center;\n"])));
var ServicePoint = styled.div.attrs({ cid: 'ServicePoint' })(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-top: 5em;\n  margin-bottom: 5em;\n"], ["\n  margin-top: 5em;\n  margin-bottom: 5em;\n"])));
var ServicePointIcon = styled.div.attrs({ cid: 'ServicePointIcon' })(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  margin: 0 auto;\n  transform: rotate(45deg);\n  font-size: 2.5em;\n  color: ", ";\n  line-height: 2.5em;\n  background: rgba(195, 185, 185, 0.21);\n  width: 2.5em;\n  height: 2.5em;\n  text-align: center;\n  border: solid 4px ", ";\n  outline: 1px solid ", ";\n  margin-bottom: 1em;\n\n  ", ":hover & {\n    color: #d0d0d0;\n    background: ", ";\n    cursor: pointer;\n    transition: ease-out(1.5s);\n  }\n"], ["\n  margin: 0 auto;\n  transform: rotate(45deg);\n  font-size: 2.5em;\n  color: ", ";\n  line-height: 2.5em;\n  background: rgba(195, 185, 185, 0.21);\n  width: 2.5em;\n  height: 2.5em;\n  text-align: center;\n  border: solid 4px ", ";\n  outline: 1px solid ", ";\n  margin-bottom: 1em;\n\n  ", ":hover & {\n    color: #d0d0d0;\n    background: ", ";\n    cursor: pointer;\n    transition: ease-out(1.5s);\n  }\n"])), function (props) { return props.theme.primary; }, function (props) { return props.theme.background; }, function (props) { return props.theme.secondary; }, ServicePoint, function (props) { return props.theme.primary; });
var ServicePointItalic = styled.i.attrs({ cid: 'ServicePointItalic' })(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  transform: rotate(-45deg);\n"], ["\n  position: relative;\n  overflow: hidden;\n  transform: rotate(-45deg);\n"])));
var ServiceModule = function (props) {
    return (React.createElement(ServiceGroup, null, props.services.map(function (service, idx) { return (React.createElement(ServicePoint, { key: 'service.' + idx },
        React.createElement(ServicePointIcon, null,
            React.createElement(ServicePointItalic, { className: service.icon })),
        React.createElement("h2", null, service.title),
        React.createElement("p", null, service.description))); })));
};
export { ServiceModule };
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=ServiceModule.js.map