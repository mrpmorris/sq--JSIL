﻿JSIL.ImplementExternals("System.EventArgs", function ($) {
  $.Method({ Static: false, Public: true }, ".ctor",
	new JSIL.MethodSignature(null, [], []),
	function () {
	}
  );
});

//? if (typeof GENERATE_STUBS !== 'undefined') {
JSIL.MakeStruct("System.ValueType", "System.EventArgs", true, [], function ($) {
  $.Field({ Static: true, Public: true }, "Empty", $jsilcore.TypeRef("System.EventArgs"), function ($) {
    return new System.EventArgs();
  });
});
//? }