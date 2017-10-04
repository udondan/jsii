# jsii
jsII creates type-annotated bundles from typescript modules which can be used to auto-generate idiomatic packages in a variety of target languages. Generated types proxy calls to an embedded javascript VM, effectively allowing jsII modules to be "written once and run everywhere". Due to performance of the hosted javascript engine and marshaling costs, jsII modules are likely to be used for development and build tools, as oppose to performance-sensitive runtime behavior. 
