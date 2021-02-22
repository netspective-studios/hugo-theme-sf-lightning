from prometheus_client import CollectorRegistry, Gauge, write_to_textfile, Info, Counter, Summary
from typing import Any, Dict, Generic, Generator, List, Tuple, Type, Optional
from pydantic import BaseModel as BasePydanticModel, NoneStr


class MetricCollector:
    lastExecuted: str
    txId: str
    expectedItems: int = 0
    generatedItems: int
    startTime: float
    totalExecTime: float
    host: str
    sourceUrl: str

    def setData(
        self,
        lastExecuted,
        txId,
        expectedItems,
        generatedItems,
        startTime,
        totalExecTime,
        host,
        sourceUrl,
    ):
        self.lastExecuted = lastExecuted
        self.txId = txId
        self.expectedItems = expectedItems
        self.generatedItems = generatedItems
        self.startTime = startTime
        self.totalExecTime = totalExecTime
        self.host = host
        self.sourceUrl = sourceUrl


class MetricLabel:
    name: str
    description: str
    labels: List[str]

    def __init__(self, name, description, labels):
        self.name = name
        self.description = description
        self.labels = labels


class MetricGenerator:
    def guageMetric(self, ml: MetricLabel):
        templateLabel = Gauge(ml.name, ml.description, ml.labels)
        return templateLabel

