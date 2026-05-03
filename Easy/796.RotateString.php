class Solution {

function rotateString($s, $goal) {
if(strlen($s) !== strlen($goal)){
return false;
}

return strpos($s . $s, $goal) !== false;
}
}