
void main(){
	vec2 uv = (gl_FragCoord.xy/vec2(500.0,500.0))*2.0-1.0;
	vec4 f;
	
	float d = 1.0-smoothstep( 0.6, 0.05, 1.0 - length(uv.xy) );
	f = vec4( 1.0, 1.0, 1.0, d );
	
	gl_FragColor=f;
}