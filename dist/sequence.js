"use strict";
// Copyright IBM Corp. 2018,2020. All Rights Reserved.
// Node module: @loopback/example-todo
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySequence = void 0;
const rest_1 = require("@loopback/rest");
// ------------------------------------
class MySequence extends rest_1.MiddlewareSequence {
}
exports.MySequence = MySequence;
//   // constructor(
//   //   // ---- ADD THIS LINE ------
//   //   @inject(AuthenticationBindings.AUTH_ACTION)
//   // protected authenticateRequest: AuthenticateFn,
//   //   @inject(SequenceActions.FIND_ROUTE) protected findRoute: FindRoute,
//   //   @inject(SequenceActions.PARSE_PARAMS) protected parseParams: ParseParams,
//   //   @inject(SequenceActions.INVOKE_METHOD) protected invoke: InvokeMethod,
//   //   @inject(SequenceActions.SEND) public send: Send,
//   //   @inject(SequenceActions.REJECT) public reject: Reject,
//   // ) { }
//   async handle(context: RequestContext) {
//     var err = new Error();
//     try {
//       const { request, response } = context;
//       const route = this.findRoute(request);
//       // - enable jwt auth -
//       // call authentication action
//       // ---------- ADD THIS LINE -------------
//       await this.authenticateRequest(request);
//       //cros origin
//       response.header('Access-Control-Allow-Origin', '*');
//       response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//       const args = await this.parseParams(request, route);
//       const result = await this.invoke(route, args);
//       //preflight OK status
//       if (request.method == 'OPTIONS') {
//         response.status(200)
//         this.send(response, 'ok');
//       } else {
//         this.send(response, result);
//       }
//     } catch (err) {
//       // ---------- ADD THIS SNIPPET -------------
//       // if error is coming from the JWT authentication extension
//       // make the statusCode 401
//       if (err && (err.code === AUTHENTICATION_STRATEGY_NOT_FOUND || err.code === USER_PROFILE_NOT_FOUND)
//       ) {
//         Object.assign(err, { statusCode: 401 /* Unauthorized */ });
//       }
//       // ---------- END OF SNIPPET -------------
//       this.reject(context, err);
//     }
//   }
// }
//# sourceMappingURL=sequence.js.map