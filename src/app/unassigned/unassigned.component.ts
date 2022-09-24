import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unassigned',
  templateUrl: './unassigned.component.html',
  styleUrls: ['./unassigned.component.scss']
})
export class UnassignedComponent implements OnInit {
public inputValue: any;
public textFromModel = '  Property Binding'
  constructor() { }

  ngOnInit(): void {
    this.test();
    const customListObj = [
      {
        "id": -1,
        "name": "ALL OPERATIONS",
        "sequenceNumber": -1,
        "plannedUnitIds": {
        },
        "propertyValues": {
        },
        "billOfMaterials": {
        },
        "formulationItemsConsumption": {
        },
        "documents": {
        },
        "segmentId": -1,
        "behaviors": {
        },
        "childSegmentsData": {
        },
        "childOpDataSourceStorage": {
        }
      },
      {
        "allVariables": {
        },
        "allbomItems": [
          {
            "productName": "AlphaQAMaterial1",
            "productDescription": "AlphaQAMaterial1",
            "itemOrder": 1,
            "lowerTolerance": null,
            "lowerTolerancePrecision": 0,
            "productId": 35026,
            "quantity": 1,
            "quantityPrecision": 0,
            "scrapFactor": 0,
            "storageUnit": null,
            "uom": 50002,
            "upperTolerance": null,
            "upperTolerancePrecision": 0,
            "substitutions": {
            },
            "id": 1,
            "name": "AlphaQAMaterial1",
            "description": "AlphaQAMaterial1",
            "sequenceNumber": 1,
            "itemId": 1,
            "productCode": 1,
            "behaviors": [
              {
                "requiresConsumptionTracking": true
              }
            ],
            "selectedOp": [
              {
                "id": 2,
                "name": "NewOperation.2"
              }
            ],
            "allOp": [
              {
                "name": "Copy 2 r-op1",
                "id": 10,
                "status": "NotReady",
                "sequenceNumber": 10,
                "isNewSeg": true
              },
              {
                "name": "NewOperation.2",
                "id": 11,
                "status": "NotReady",
                "sequenceNumber": 20,
                "isNewSeg": true
              },
              {
                "name": "NewOperation.3",
                "id": 12,
                "status": "NotReady",
                "sequenceNumber": 30,
                "isNewSeg": true
              }
            ],
            "isMandValue": [
              {
                "id": true,
                "displayValue": "Yes"
              }
            ],
            "isMandDisabled": false
          }
        ],
        "appliesTo": {
          "excludedMaterialLotActualIds": {
          },
          "materialLotActualIds": [
            254
          ]
        },
        "behaviors": [
          "requiresClockOn"
        ],
        "dataEntryPlans": {
        },
        "description": "",
        "documents": {
        },
        "formulationItemsConsumption": {
        },
        "name": "Copy 2 r-op1",
        "plannedUnits": [
          {
            "machinePlan": null,
            "peoplePlan": null,
            "unitId": 50
          },
          {
            "machinePlan": null,
            "peoplePlan": null,
            "unitId": 51
          }
        ],
        "propertyDefinationData": null,
        "propertyValues": {
        },
        "savedDocs": null,
        "segmentId": 1,
        "segmentType": "segment",
        "suggestedLaborTypes": [
          1
        ],
        "isNewSeg": true,
        "sequenceNumber": 10,
        "optional": false,
        "showME": false,
        "enableME": false,
        "id": 1,
        "displayOrder": 10,
        "childSegmentsData": {
        },
        "childOpDataSourceStorage": {
        },
        "plannedUnitIds": [
          50,
          51
        ]
      },
      {
        "allVariables": {
        },
        "allbomItems": [
          {
            "productName": "AlphaQAMaterial1",
            "productDescription": "AlphaQAMaterial1",
            "itemOrder": 1,
            "lowerTolerance": null,
            "lowerTolerancePrecision": 0,
            "productId": 35026,
            "quantity": 1,
            "quantityPrecision": 0,
            "scrapFactor": 0,
            "storageUnit": null,
            "uom": 50002,
            "upperTolerance": null,
            "upperTolerancePrecision": 0,
            "substitutions": {
            },
            "id": 1,
            "name": "AlphaQAMaterial1",
            "description": "AlphaQAMaterial1",
            "sequenceNumber": 1,
            "itemId": 1,
            "productCode": 1,
            "behaviors": [
              {
                "requiresConsumptionTracking": true
              }
            ],
            "selectedOp": [
              {
                "id": 2,
                "name": "NewOperation.2"
              }
            ],
            "allOp": [
              {
                "name": "Copy 2 r-op1",
                "id": 10,
                "status": "NotReady",
                "sequenceNumber": 10,
                "isNewSeg": true
              },
              {
                "name": "NewOperation.2",
                "id": 11,
                "status": "NotReady",
                "sequenceNumber": 20,
                "isNewSeg": true
              },
              {
                "name": "NewOperation.3",
                "id": 12,
                "status": "NotReady",
                "sequenceNumber": 30,
                "isNewSeg": true
              }
            ],
            "isMandValue": [
              {
                "id": true,
                "displayValue": "Yes"
              }
            ],
            "isMandDisabled": false
          }
        ],
        "appliesTo": {
          "excludedMaterialLotActualIds": {
          },
          "materialLotActualIds": [
            254
          ]
        },
        "behaviors": {
        },
        "dataEntryPlans": {
        },
        "description": "",
        "documents": {
        },
        "formulationItemsConsumption": [
          {
            "behaviors": [
              "requiresConsumptionTracking"
            ],
            "itemReference": "item_ref_1",
            "lowerTolerance": null,
            "quantity": 1,
            "quantityPrecision": 0,
            "upperTolerance": null
          }
        ],
        "name": "NewOperation.2",
        "plannedUnits": [
          {
            "machinePlan": null,
            "peoplePlan": null,
            "unitId": 50
          },
          {
            "machinePlan": null,
            "peoplePlan": null,
            "unitId": 51
          }
        ],
        "propertyDefinationData": null,
        "propertyValues": {
        },
        "savedDocs": null,
        "segmentId": 2,
        "segmentType": "segment",
        "suggestedLaborTypes": {
        },
        "isNewSeg": true,
        "sequenceNumber": 10,
        "optional": false,
        "showME": false,
        "enableME": false,
        "id": 2,
        "childSegmentsData": {
        },
        "childOpDataSourceStorage": {
        },
        "displayOrder": 20,
        "plannedUnitIds": [
          50,
          51
        ]
      },
      {
        "allVariables": {
        },
        "allbomItems": [
          {
            "productName": "AlphaQAMaterial1",
            "productDescription": "AlphaQAMaterial1",
            "itemOrder": 1,
            "lowerTolerance": null,
            "lowerTolerancePrecision": 0,
            "productId": 35026,
            "quantity": 1,
            "quantityPrecision": 0,
            "scrapFactor": 0,
            "storageUnit": null,
            "uom": 50002,
            "upperTolerance": null,
            "upperTolerancePrecision": 0,
            "substitutions": {
            },
            "id": 1,
            "name": "AlphaQAMaterial1",
            "description": "AlphaQAMaterial1",
            "sequenceNumber": 1,
            "itemId": 1,
            "productCode": 1,
            "behaviors": [
              {
                "requiresConsumptionTracking": true
              }
            ],
            "selectedOp": [
              {
                "id": 2,
                "name": "NewOperation.2"
              }
            ],
            "allOp": [
              {
                "name": "Copy 2 r-op1",
                "id": 10,
                "status": "NotReady",
                "sequenceNumber": 10,
                "isNewSeg": true
              },
              {
                "name": "NewOperation.2",
                "id": 11,
                "status": "NotReady",
                "sequenceNumber": 20,
                "isNewSeg": true
              },
              {
                "name": "NewOperation.3",
                "id": 12,
                "status": "NotReady",
                "sequenceNumber": 30,
                "isNewSeg": true
              }
            ],
            "isMandValue": [
              {
                "id": true,
                "displayValue": "Yes"
              }
            ],
            "isMandDisabled": false
          }
        ],
        "appliesTo": {
          "excludedMaterialLotActualIds": {
          },
          "materialLotActualIds": [
            254
          ]
        },
        "behaviors": [
          "requiresClockOn"
        ],
        "dataEntryPlans": {
        },
        "description": "",
        "documents": {
        },
        "formulationItemsConsumption": {
        },
        "name": "NewOperation.3",
        "plannedUnits": [
          {
            "machinePlan": null,
            "peoplePlan": null,
            "unitId": 50
          },
          {
            "machinePlan": null,
            "peoplePlan": null,
            "unitId": 51
          }
        ],
        "propertyDefinationData": null,
        "propertyValues": {
        },
        "savedDocs": null,
        "segmentId": 3,
        "segmentType": "segment",
        "suggestedLaborTypes": [
          2
        ],
        "isNewSeg": true,
        "sequenceNumber": 10,
        "optional": false,
        "showME": false,
        "enableME": false,
        "id": 3,
        "childSegmentsData": {
        },
        "childOpDataSourceStorage": {
        },
        "displayOrder": 30,
        "plannedUnitIds": [
          50,
          51
        ]
      },
      {
        "allVariables": null,
        "allbomItems": null,
        "appliesTo": {
          "excludedMaterialLotActualIds": {
          },
          "materialLotActualIds": {
          }
        },
        "behaviors": {
        },
        "dataEntryPlans": {
        },
        "description": "",
        "documents": {
        },
        "formulationItemsConsumption": {
        },
        "name": "Rework-PL1000024-1",
        "plannedUnits": {
        },
        "propertyDefinationData": null,
        "propertyValues": {
        },
        "savedDocs": null,
        "segmentId": 4,
        "segmentType": "group",
        "suggestedLaborTypes": {
        },
        "sequenceNumber": 10,
        "optional": false,
        "showME": false,
        "enableME": false,
        "id": 4,
        "childSegmentsData": {
        },
        "childOpDataSourceStorage": [
          {
            "allVariables": {
            },
            "allbomItems": [
              {
                "productName": "AlphaQAMaterial1",
                "productDescription": "AlphaQAMaterial1",
                "itemOrder": 1,
                "lowerTolerance": null,
                "lowerTolerancePrecision": 0,
                "productId": 35026,
                "quantity": 1,
                "quantityPrecision": 0,
                "scrapFactor": 0,
                "storageUnit": null,
                "uom": 50002,
                "upperTolerance": null,
                "upperTolerancePrecision": 0,
                "substitutions": {
                },
                "id": 1,
                "name": "AlphaQAMaterial1",
                "description": "AlphaQAMaterial1",
                "sequenceNumber": 1,
                "itemId": 1,
                "productCode": 1,
                "behaviors": [
                  {
                    "requiresConsumptionTracking": true
                  }
                ],
                "selectedOp": [
                  {
                    "id": 2,
                    "name": "NewOperation.2"
                  }
                ],
                "allOp": [
                  {
                    "name": "Copy 2 r-op1",
                    "id": 10,
                    "status": "NotReady",
                    "sequenceNumber": 10,
                    "isNewSeg": true
                  },
                  {
                    "name": "NewOperation.2",
                    "id": 11,
                    "status": "NotReady",
                    "sequenceNumber": 20,
                    "isNewSeg": true
                  },
                  {
                    "name": "NewOperation.3",
                    "id": 12,
                    "status": "NotReady",
                    "sequenceNumber": 30,
                    "isNewSeg": true
                  }
                ],
                "isMandValue": [
                  {
                    "id": true,
                    "displayValue": "Yes"
                  }
                ],
                "isMandDisabled": false
              }
            ],
            "appliesTo": {
              "excludedMaterialLotActualIds": {
              },
              "materialLotActualIds": [
                254
              ]
            },
            "behaviors": [
              "requiresClockOn"
            ],
            "dataEntryPlans": {
            },
            "description": "",
            "documents": {
            },
            "formulationItemsConsumption": {
            },
            "name": "Copy 2 r-op1",
            "plannedUnits": [
              {
                "machinePlan": null,
                "peoplePlan": null,
                "unitId": 50
              },
              {
                "machinePlan": null,
                "peoplePlan": null,
                "unitId": 51
              }
            ],
            "propertyDefinationData": null,
            "propertyValues": {
            },
            "savedDocs": null,
            "segmentId": 10,
            "segmentType": "segment",
            "suggestedLaborTypes": [
              1
            ],
            "isNewSeg": true,
            "sequenceNumber": 10,
            "optional": false,
            "showME": false,
            "enableME": false,
            "id": 1,
            "displayOrder": 10,
            "childSegmentsData": {
            },
            "childOpDataSourceStorage": {
            },
            "plannedUnitIds": [
              50,
              51
            ]
          },
          {
            "allVariables": {
            },
            "allbomItems": [
              {
                "productName": "AlphaQAMaterial1",
                "productDescription": "AlphaQAMaterial1",
                "itemOrder": 1,
                "lowerTolerance": null,
                "lowerTolerancePrecision": 0,
                "productId": 35026,
                "quantity": 1,
                "quantityPrecision": 0,
                "scrapFactor": 0,
                "storageUnit": null,
                "uom": 50002,
                "upperTolerance": null,
                "upperTolerancePrecision": 0,
                "substitutions": {
                },
                "id": 1,
                "name": "AlphaQAMaterial1",
                "description": "AlphaQAMaterial1",
                "sequenceNumber": 1,
                "itemId": 1,
                "productCode": 1,
                "behaviors": [
                  {
                    "requiresConsumptionTracking": true
                  }
                ],
                "selectedOp": [
                  {
                    "id": 2,
                    "name": "NewOperation.2"
                  }
                ],
                "allOp": [
                  {
                    "name": "Copy 2 r-op1",
                    "id": 10,
                    "status": "NotReady",
                    "sequenceNumber": 10,
                    "isNewSeg": true
                  },
                  {
                    "name": "NewOperation.2",
                    "id": 11,
                    "status": "NotReady",
                    "sequenceNumber": 20,
                    "isNewSeg": true
                  },
                  {
                    "name": "NewOperation.3",
                    "id": 12,
                    "status": "NotReady",
                    "sequenceNumber": 30,
                    "isNewSeg": true
                  }
                ],
                "isMandValue": [
                  {
                    "id": true,
                    "displayValue": "Yes"
                  }
                ],
                "isMandDisabled": false
              }
            ],
            "appliesTo": {
              "excludedMaterialLotActualIds": {
              },
              "materialLotActualIds": [
                254
              ]
            },
            "behaviors": {
            },
            "dataEntryPlans": {
            },
            "description": "",
            "documents": {
            },
            "formulationItemsConsumption": [
              {
                "behaviors": [
                  "requiresConsumptionTracking"
                ],
                "itemReference": "item_ref_1",
                "lowerTolerance": null,
                "quantity": 1,
                "quantityPrecision": 0,
                "upperTolerance": null
              }
            ],
            "name": "NewOperation.2",
            "plannedUnits": [
              {
                "machinePlan": null,
                "peoplePlan": null,
                "unitId": 50
              },
              {
                "machinePlan": null,
                "peoplePlan": null,
                "unitId": 51
              }
            ],
            "propertyDefinationData": null,
            "propertyValues": {
            },
            "savedDocs": null,
            "segmentId": 11,
            "segmentType": "segment",
            "suggestedLaborTypes": {
            },
            "isNewSeg": true,
            "sequenceNumber": 10,
            "optional": false,
            "showME": false,
            "enableME": false,
            "id": 2,
            "childSegmentsData": {
            },
            "childOpDataSourceStorage": {
            },
            "displayOrder": 20,
            "plannedUnitIds": [
              50,
              51
            ]
          },
          {
            "allVariables": {
            },
            "allbomItems": [
              {
                "productName": "AlphaQAMaterial1",
                "productDescription": "AlphaQAMaterial1",
                "itemOrder": 1,
                "lowerTolerance": null,
                "lowerTolerancePrecision": 0,
                "productId": 35026,
                "quantity": 1,
                "quantityPrecision": 0,
                "scrapFactor": 0,
                "storageUnit": null,
                "uom": 50002,
                "upperTolerance": null,
                "upperTolerancePrecision": 0,
                "substitutions": {
                },
                "id": 1,
                "name": "AlphaQAMaterial1",
                "description": "AlphaQAMaterial1",
                "sequenceNumber": 1,
                "itemId": 1,
                "productCode": 1,
                "behaviors": [
                  {
                    "requiresConsumptionTracking": true
                  }
                ],
                "selectedOp": [
                  {
                    "id": 2,
                    "name": "NewOperation.2"
                  }
                ],
                "allOp": [
                  {
                    "name": "Copy 2 r-op1",
                    "id": 10,
                    "status": "NotReady",
                    "sequenceNumber": 10,
                    "isNewSeg": true
                  },
                  {
                    "name": "NewOperation.2",
                    "id": 11,
                    "status": "NotReady",
                    "sequenceNumber": 20,
                    "isNewSeg": true
                  },
                  {
                    "name": "NewOperation.3",
                    "id": 12,
                    "status": "NotReady",
                    "sequenceNumber": 30,
                    "isNewSeg": true
                  }
                ],
                "isMandValue": [
                  {
                    "id": true,
                    "displayValue": "Yes"
                  }
                ],
                "isMandDisabled": false
              }
            ],
            "appliesTo": {
              "excludedMaterialLotActualIds": {
              },
              "materialLotActualIds": [
                254
              ]
            },
            "behaviors": [
              "requiresClockOn"
            ],
            "dataEntryPlans": {
            },
            "description": "",
            "documents": {
            },
            "formulationItemsConsumption": {
            },
            "name": "NewOperation.3",
            "plannedUnits": [
              {
                "machinePlan": null,
                "peoplePlan": null,
                "unitId": 50
              },
              {
                "machinePlan": null,
                "peoplePlan": null,
                "unitId": 51
              }
            ],
            "propertyDefinationData": null,
            "propertyValues": {
            },
            "savedDocs": null,
            "segmentId": 12,
            "segmentType": "segment",
            "suggestedLaborTypes": [
              2
            ],
            "isNewSeg": true,
            "sequenceNumber": 10,
            "optional": false,
            "showME": false,
            "enableME": false,
            "id": 3,
            "childSegmentsData": {
            },
            "childOpDataSourceStorage": {
            },
            "displayOrder": 30,
            "plannedUnitIds": [
              50,
              51
            ]
          }
        ],
        "plannedUnitIds": {
        }
      }
    ]
    
    const existingOpns = [
      {
        "name": "Copy 2 r-op1",
        "id": 1,
        "sequenceNumber": 10,
        "isNewSeg": true
      },
      {
        "name": "NewOperation.2",
        "id": 2,
        "sequenceNumber": 10,
        "isNewSeg": true
      },
      {
        "name": "NewOperation.3",
        "id": 3,
        "sequenceNumber": 10,
        "isNewSeg": true
      }
    ]

    console.log(customListObj,'customlistibj')
    console.log(existingOpns,'opdata')
    this.getExistingOpns(customListObj);
   
  }

  test(){
    const fname = 'sharique';
    const lname = 'jamal';
    let obj = {fname, lname}
    // console.log(obj);

    const str = 'btreesoft.com'
    const getChar = str[2];
    console.log(getChar)

    /** power in number */
    const getPow = 5**3;
    console.log('expected 125:' ,getPow);

    const getFloor = ~~6.7;
    console.log('expected 6:' ,getFloor);
    const res = 'hey\n'.repeat(10)
    console.log(res)


   
  }


  getExistingOpns(customListObj:any){
    const existingOpns:any = [];
    let tempListObj = customListObj.filter((obj:any) => obj?.id != -1 && obj?.behaviors)
    tempListObj.forEach((segobj:any) => {
      if(segobj.isNewSeg || segobj.isSegmentCopied){
        existingOpns.push({
          name: segobj.name,
          id: segobj.id,
          status: segobj.status,
          sequenceNumber: segobj.sequenceNumber,
          isNewSeg: segobj.isNewSeg ? segobj.isNewSeg : false
        })
      }
    });

    console.log(existingOpns, 'existingOpns from function')
    return existingOpns;
  }


  getValue(templateRef:any){
    console.log(templateRef.value)
  }
 
  showAlertPopup(){
    alert('Welcome to TMS!')
  }
  

}
