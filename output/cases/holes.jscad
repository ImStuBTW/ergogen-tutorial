function mounting_extrude_4_outline_fn(){
    return CAG.circle({"center":[237.3465765,-156.767616],"radius":1.5})
.union(
    CAG.circle({"center":[214.3799239,-93.6672565],"radius":1.5})
).union(
    CAG.circle({"center":[300.6094863,-120.0671156],"radius":1.5})
).union(
    CAG.circle({"center":[283.166459,-72.1427919],"radius":1.5})
).union(
    CAG.circle({"center":[135.5574309,-156.767616],"radius":1.5})
).union(
    CAG.circle({"center":[158.5240835,-93.6672565],"radius":1.5})
).union(
    CAG.circle({"center":[72.2945211,-120.0671156],"radius":1.5})
).union(
    CAG.circle({"center":[89.7375484,-72.1427919],"radius":1.5})
).extrude({ offset: [0, 0, 4] });
}




                function holes_case_fn() {
                    

                // creating part 0 of case holes
                let holes__part_0 = mounting_extrude_4_outline_fn();

                // make sure that rotations are relative
                let holes__part_0_bounds = holes__part_0.getBounds();
                let holes__part_0_x = holes__part_0_bounds[0].x + (holes__part_0_bounds[1].x - holes__part_0_bounds[0].x) / 2
                let holes__part_0_y = holes__part_0_bounds[0].y + (holes__part_0_bounds[1].y - holes__part_0_bounds[0].y) / 2
                holes__part_0 = translate([-holes__part_0_x, -holes__part_0_y, 0], holes__part_0);
                holes__part_0 = rotate([0,0,0], holes__part_0);
                holes__part_0 = translate([holes__part_0_x, holes__part_0_y, 0], holes__part_0);

                holes__part_0 = translate([0,0,0], holes__part_0);
                let result = holes__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return holes_case_fn();
            }

        