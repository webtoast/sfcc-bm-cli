# [sfcc-bm-cli](https://github.com/webtoast/sfcc-bm-cli)

> Parse and generate XML to batch delete slot configs in Salesforce Commerce Cloud

## Usage

`sfcc-bm -i <path to file> -a <age in weeks>`

1. Log into Demandware and export content slots
1. Run the cli
1. Upload the XML file
1. Import the XML file
1. After Demandware validates the file, click Next
1. Choose the delete option and click Next
1. Demandware will batch delete all the configs in the XML

There are a couple of ways that you can validate the deletions:

1. If you have Admin rights, navigate to Administration -> Operations -> Quota Status and check the number of slot configs. It should be less than what it was before.
1. Export the slot configs again from Salesforce and rerun the above steps with the same age parameter you used previously. There shouldn't be any slot configs.

## Tips

* Find the oldest slots first, meaning, start batching with small collections.
* Don't batch delete hundreds or thousands in one step.
* Review the generated XML before uploading/importing into Demandware.
* If possible, batch delete in a lower environment other than the staging environment.

## Known Limitations

The use of special characters in your category IDs may cause Salesforce's XML validation to fail. There's 2 things you can do:

1. Change the category ID in Business Manager and then repeat the above usage steps.
1. If you can't change the ID in Business Manager, then find the offending slot configurations in the XML file and remove them. Note that the old configurations will not be deleted this round, so keep that in mind when running through the steps in the future.
