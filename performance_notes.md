<============= 6/8/2019 10:51 SEED &&& 10:53 END WITH 10M DOCUMENTS =============>

<============= 6/8/2019 10:14 MAKE FILE &&& 10:14 END WITH 10M DOCUMENTS CSV =============>
Finish generating data: 31672.930ms

<============= 6/7/2019 4:28:42 SEED &&& 4:31:05 END WITH 10M DOCUMENTS =============>

<============= 6/7/2019 4:04 MAKE FILE &&& 4:07 END WITH 10M DOCUMENTS JSON =============>
Finish generating data: 152396.747ms


<============= 6/6/2019 3:09 SEED USING ASYNC AWAIT FOR LOOP &&& 5:14 END WITH 10M DOCUMENTS (ONE DOCUMENT EACH) =============>

<============= 6/6/2019 9:49 SEED USING ASYNC AWAIT FOR LOOP &&& 10:04 END WITH 10M DOCUMENTS (BATCH 100 EACH) =============>

<============= 6/5/2019 7:40 SEED USING ASYNC AWAIT FOR LOOP &&& 8:07 END WITH 17M DOCUMENTS =============>


<============= 6/5/2019 SEED USING NORMAL FOR LOOP FAILED =============>

<--- Last few GCs --->

[33047:0x10264a000]    22692 ms: Mark-sweep 1388.3 (1425.2) -> 1387.6 (1424.2) MB, 1271.6 / 0.0 ms  (average mu = 0.126, current mu = 0.010) allocation failure scavenge might not succeed
[33047:0x10264a000]    22700 ms: Scavenge 1388.3 (1424.2) -> 1388.0 (1425.2) MB, 3.9 / 0.0 ms  (average mu = 0.126, current mu = 0.010) allocation failure 


<--- JS stacktrace --->

==== JS stack trace =========================================

    0: ExitFrame [pc: 0x2ee04995be3d]
Security context: 0x1a3746e9e6e9 <JSObject>
    1: $set [0x1a37c2f9c571] [/Users/morganlin/Desktop/workspace/tormund-and-big-lady/sdc/time-sponsored/node_modules/mongoose/lib/document.js:~735] [pc=0x2ee049e14723](this=0x1a371ad4c071 <model map = 0x1a3740d37839>,path=0x1a376da5ef31 <String[5]: image>,val=0x1a376da60e79 <String[89]: https://s3-us-west-1.amazonaws.com/kayjayhogan/Italian/tomato-mozzarell...

FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
 1: 0x10003c597 node::Abort() [/usr/local/bin/node]
 2: 0x10003c7a1 node::OnFatalError(char const*, char const*) [/usr/local/bin/node]
 3: 0x1001ad575 v8::internal::V8::FatalProcessOutOfMemory(v8::internal::Isolate*, char const*, bool) [/usr/local/bin/node]
 4: 0x100579242 v8::internal::Heap::FatalProcessOutOfMemory(char const*) [/usr/local/bin/node]
 5: 0x10057bd15 v8::internal::Heap::CheckIneffectiveMarkCompact(unsigned long, double) [/usr/local/bin/node]
 6: 0x100577bbf v8::internal::Heap::PerformGarbageCollection(v8::internal::GarbageCollector, v8::GCCallbackFlags) [/usr/local/bin/node]
 7: 0x100575d94 v8::internal::Heap::CollectGarbage(v8::internal::AllocationSpace, v8::internal::GarbageCollectionReason, v8::GCCallbackFlags) [/usr/local/bin/node]
 8: 0x10058262c v8::internal::Heap::AllocateRawWithLigthRetry(int, v8::internal::AllocationSpace, v8::internal::AllocationAlignment) [/usr/local/bin/node]
 9: 0x1005826af v8::internal::Heap::AllocateRawWithRetryOrFail(int, v8::internal::AllocationSpace, v8::internal::AllocationAlignment) [/usr/local/bin/node]
10: 0x100551ff4 v8::internal::Factory::NewFillerObject(int, bool, v8::internal::AllocationSpace) [/usr/local/bin/node]
11: 0x1007da044 v8::internal::Runtime_AllocateInNewSpace(int, v8::internal::Object**, v8::internal::Isolate*) [/usr/local/bin/node]
12: 0x2ee04995be3d 
13: 0x2ee049e14723 
14: 0x2ee04990a5c3 
Abort trap: 6