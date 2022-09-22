import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnassignedComponent } from './unassigned.component';

describe('UnassignedComponent', () => {
  let component: UnassignedComponent;
  let fixture: ComponentFixture<UnassignedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnassignedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnassignedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



  it('should call getExistingOpns', () => {

    const data = [
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
    var result = component.getExistingOpns(data);

        // Assert
        expect(result.length).toBeGreaterThan(0)
  });


});
