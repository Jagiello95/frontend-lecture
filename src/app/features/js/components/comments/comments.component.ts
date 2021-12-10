import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  private distances: Record<string, number | string> = {};
  private parents: Record<string, number | string> = {}
  private visited!: string[];
  constructor() { }

  ngOnInit(): void {
  }


  assignUsers() {

  } //To do

  public shortestDistanceNodeWithoutComments = () => {
    let shortest = null;
    
    for (let node in this.distances) {
      let currentIsShortest =
        shortest === null || this.distances[node] < this.distances[shortest];
      if (currentIsShortest && !this.visited.includes(node)) {
        shortest = node;
      }
    }
    return shortest;
  };

  public calculateShortestPathWithoutComments(graph: Record<string, any>, startNode: number, endNode: number) {
      this.distances[endNode] = "Infinity";
      this.distances = Object.assign(this.distances, graph[startNode]);
      this.parents = { endNode: 0 };
      for (let child in graph[startNode]) {
       this.parents[child] = startNode;
      }
       
        this.visited = [];
        let node = this.shortestDistanceNode();
      
      // for that node:
      while (node) {
       let distance = this.distances[node];
       let children = graph[node]; 
           
           for (let child in children) {
             if (String(child) === String(startNode)) {
               continue;
            } else {
               let newdistance = distance + children[child];
               if (!this.distances[child] || this.distances[child] > newdistance) {
          this.distances[child] = newdistance;
          this.parents[child] = node;
         } 
              }
            }  
           this.visited.push(node);
           node = this.shortestDistanceNode();
         }

      let shortestPath = [endNode];
      let parent = this.parents[endNode];
      while (parent) {
       shortestPath.push(parent as number);
       parent = this.parents[parent];
      }
      shortestPath.reverse();
       
      let results = {
       distance: this.distances[endNode],
       path: shortestPath,
      };
        return results;
     };




  public shortestDistanceNode = () => {
    // create a default value for shortest
    let shortest = null;
    
      // for each node in the distances object
    for (let node in this.distances) {
        // if no node has been assigned to shortest yet
        // or if the current node's distance is smaller than the current shortest
      let currentIsShortest =
        shortest === null || this.distances[node] < this.distances[shortest];
            
        // and if the current node is in the unvisited set
      if (currentIsShortest && !this.visited.includes(node)) {
              // update shortest to be the current node
        shortest = node;
      }
    }
    return shortest;
  };

  public calculateShortestPath(graph: Record<string, any>, startNode: number, endNode: number) {
 
      // track distances from the start node using a hash object

      this.distances[endNode] = "Infinity";
      this.distances = Object.assign(this.distances, graph[startNode]);// track paths using a hash object
      this.parents = { endNode: 0 };
      for (let child in graph[startNode]) {
       this.parents[child] = startNode;
      }
       
      // collect visited nodes
        this.visited = [];// find the nearest node
        let node = this.shortestDistanceNode();
      
      // for that node:
      while (node) {
      // find its distance from the start node & its child nodes
       let distance = this.distances[node];
       let children = graph[node]; 
           
      // for each of those child nodes:
           for (let child in children) {
       
       // make sure each child node is not the start node
             if (String(child) === String(startNode)) {
               continue;
            } else {
               // save the distance from the start node to the child node
               let newdistance = distance + children[child];// if there's no recorded distance from the start node to the child node in the distances object
     // or if the recorded distance is shorter than the previously stored distance from the start node to the child node
               if (!this.distances[child] || this.distances[child] > newdistance) {
     // save the distance to the object
          this.distances[child] = newdistance;
     // record the path
          this.parents[child] = node;
         } 
              }
            }  
           // move the current node to the visited set
           this.visited.push(node);// move to the nearest neighbor node
           node = this.shortestDistanceNode();
         }
       
      // using the stored paths from start node to end node
      // record the shortest path
      let shortestPath = [endNode];
      let parent = this.parents[endNode];
      while (parent) {
       shortestPath.push(parent as number);
       parent = this.parents[parent];
      }
      shortestPath.reverse();
       
      //this is the shortest path
      let results = {
       distance: this.distances[endNode],
       path: shortestPath,
      };
      // return the shortest path & the end node's distance from the start node
        return results;
     };
}
