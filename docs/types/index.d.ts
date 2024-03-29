/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/**
* Returns a Unicode code point from a string at specified position.
*
* @param str - input string
* @param idx - position
* @param backward - backward iteration for low surrogates
* @returns code point
*
* @example
* var str = codePointAt( 'अनुच्छेद', 2, false );
* // returns 2369
*
* str = codePointAt( '🌷', 1, true );
* // returns 127799
*/
declare function codePointAt( str: string, idx: number, backward: boolean ): number;


// EXPORTS //

export = codePointAt;
